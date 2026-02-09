import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import * as s3 from 'aws-cdk-lib/aws-s3'
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront'
import * as cloudfrontOrigins from 'aws-cdk-lib/aws-cloudfront-origins'
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment'
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager'

export class FrontendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const certificate = Certificate.fromCertificateArn(
      this,
      'Certificate',
      'arn:aws:acm:us-east-1:337781981254:certificate/3212fd9a-617b-4018-b56d-e1956a6d7a37',
    )

    const websiteBucket = new s3.Bucket(this, 'WebsiteBucket', {
      bucketName: `joblee-web-home-${this.account}`,
      websiteIndexDocument: 'index.html',
      publicReadAccess: true, // For static website hosting
      // removalPolicy: cdk.RemovalPolicy.DESTROY, // For easy cleanup during development
      // autoDeleteObjects: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS_ONLY,
    })

    const distribution = new cloudfront.Distribution(this, 'WebsiteDistribution', {
      defaultBehavior: {
        origin: new cloudfrontOrigins.S3StaticWebsiteOrigin(websiteBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      defaultRootObject: 'index.html',
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
          ttl: cdk.Duration.days(1),
        },
      ],
      domainNames: [`joblee.com.br`],
      certificate,
    })

    new s3deploy.BucketDeployment(this, 'DeployWebsite', {
      sources: [s3deploy.Source.asset('../dist')], // Path to your compiled frontend
      destinationBucket: websiteBucket,
      distribution, // Invalidate CloudFront cache on new deployments
      distributionPaths: ['/*'],
    })
  }
}
