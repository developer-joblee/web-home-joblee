#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { FrontendStack } from '../lib/infra-stack';

const app = new cdk.App();
new FrontendStack(app, 'joblee-web-home-frontend', {});
