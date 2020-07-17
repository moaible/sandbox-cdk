import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

export class SandboxCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // defines an AWS Lambda resource
    const hello = new lambda.Function(this, 'HelloWorldHandler', {
      runtime: lambda.Runtime.NODEJS_10_X,
      code: lambda.Code.asset('src/'),
      handler: 'lambda/helloworld'
    });
  }
}
