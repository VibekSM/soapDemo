import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './../src/app.module';
import { INestApplication } from '@nestjs/common';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});

// const wsdlOptions = { useEmptyTag: true };
// let resp: any;
// soap.createClient(
//   'http://localhost:8080/MTSAPilot/MyTrustSignerAgentWSEL?WSDL',
//   wsdlOptions,
//   (err: any, client: any) => {
//     if (err) console.log(err);
//     client.MyTrustSignerAgentWSEL.MyTrustSignerAgentWSELPort.RequestSMSOTP(
//       { UserID: '770908012232', MobileNo: '7002659475', OTPUsage: 'DS' },
//       function (err: any, result: any) {
//         if (err) console.log(err);
//         resp = result;
//         console.log(result);
//       },
//     );
//   },
// );
// return resp;

// const client = soap
//   .createClientAsync(
//     'http://localhost:8080/MTSAPilot/MyTrustSignerAgentWSEL?WSDL',
//     { overridePromiseSuffix: 'Promise' },
//   )
//   .then((client) => {
//     const data =
//       client.MyTrustSignerAgentWSEL.MyTrustSignerAgentWSELPort.RequestSMSOTP(
//         {
//           UserID: '770908012232',
//           MobileNo: '7002659475',
//           OTPUsage: 'DS',
//         },
//       ).then((res) => console.log(res));
//   });

// var clientOptions = {};
// soap.createClient(
//   'http://localhost:8080/MTSAPilot/MyTrustSignerAgentWSEL?WSDL',
//   clientOptions,
//   async function (err, client) {
//     try {
//       const data =
//         await client.MyTrustSignerAgentWSEL.MyTrustSignerAgentWSELPort.RequestSMSOTP(
//           {
//             UserID: '770908012232',
//             MobileNo: '7002659475',
//             OTPUsage: 'DS',
//           },
//         );
//       console.log(data);
//     } catch (err) {
//       console.log(err);
//     }
//   },
// );
