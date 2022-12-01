import * as soap from 'soap';
import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  async trustgate(): Promise<any> {
    const data = await soapPromise;
    return data;
  }
}

const soapPromise = new Promise((resolve, reject) => {
  const wsdlOptions = { useEmptyTag: true };
  soap.createClient(
    'http://localhost:8080/MTSAPilot/MyTrustSignerAgentWSEL?WSDL',
    wsdlOptions,
    (err: any, client: any) => {
      if (err) reject(err);
      client.MyTrustSignerAgentWSEL.MyTrustSignerAgentWSELPort.RequestSMSOTP(
        { UserID: '770908012232', MobileNo: '7002659475', OTPUsage: 'DS' },
        function (err: any, result: any) {
          if (err) reject(err);
          if (result) resolve(result);
        },
      );
    },
  );
});
