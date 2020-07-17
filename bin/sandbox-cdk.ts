#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { SandboxCdkStack } from '../lib/sandbox-cdk-stack';

const app = new cdk.App();
new SandboxCdkStack(app, 'SandboxCdkStack');
