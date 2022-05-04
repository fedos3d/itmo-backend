// import { Injectable } from "@nestjs/common";
// import { PassportStrategy } from "@nestjs/passport";
// import { ExtractJwt, Strategy } from "passport-jwt";
//
// @Injectable()
// export class AuthStrategy extends PassportStrategy(Strategy) {
//   constructor() {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       secretOrKey:
//         "-----BEGIN CERTIFICATE-----\nMIIDHDCCAgSgAwIBAgIICc/DAoum8fgwDQYJKoZIhvcNAQEFBQAwMTEvMC0GA1UE\nAxMmc2VjdXJldG9rZW4uc3lzdGVtLmdzZXJ2aWNlYWNjb3VudC5jb20wHhcNMjIw\nNTAzMDkzODM5WhcNMjIwNTE5MjE1MzM5WjAxMS8wLQYDVQQDEyZzZWN1cmV0b2tl\nbi5zeXN0ZW0uZ3NlcnZpY2VhY2NvdW50LmNvbTCCASIwDQYJKoZIhvcNAQEBBQAD\nggEPADCCAQoCggEBAK7kUdLrSbHeVqsGd2KC2Kt4Bup69/+2cXmfGALrYFGsKdkE\nUdeV8Mdtbqtk5njUAzXibrZb+x3jfyG/WJZXbFXgBPkSHIsIcwFFnIMQMHRfXXwV\nq1Qe5U52x2ztSYGPtz3UNBUUXsHZLplGdljtjagDqNYX1vYA6ZXItQPr1ycM0i1f\nV7j96qQ0OJjir94B1j5cTVHHtZsqoJgcJXdDabF5zC6G1X3Gxh3OftJBqM0dqWjl\nLmgGQ6CtYRmB10zqotJNa3v9Q6jT0flNpLOswnEW8t44/sjRl3sf2Tv3IMrihZYB\n2CaEvL1b9DAvWfAucrG7x8BKBKTs5u2bowqPKlcCAwEAAaM4MDYwDAYDVR0TAQH/\nBAIwADAOBgNVHQ8BAf8EBAMCB4AwFgYDVR0lAQH/BAwwCgYIKwYBBQUHAwIwDQYJ\nKoZIhvcNAQEFBQADggEBAJpMc+noeLGaKXlBrW30vEnp9KjN+bhf4WipBSV4KlQx\nwxYnZov6hrxhctz0D0rhQmIHNlmgIFkG/ej9sszz4z08MZAxrPUJsaGoIY2e4PQ3\nYOzNHFp4VssK9D1L5jxRxf+/jf0fJf/ZfFKxCzz8tWfpZitHlzmOoSMuUBTIFXmB\nvQuUWeOu3pAT7Z+ddpaLvxbE264Ybd9ujxuFWzmXJCNHh+dOruymEZrpwoOkoAaH\nll7Jr2nEaY/SUCK4QZne3FXIc07rbs9l4C8+yrcG5RkAsVH9gdgtHDgFWLFnxGb8\nQQ8yX4+6Fq/3xWzUWg4PvAIb4aX8Fwc59uBFc7yeSvg=\n-----END CERTIFICATE-----\n",
//     });
//   }
//
//   async validate(payload) {
//     console.log(payload);
//     const user = {
//       user_id: payload.user_id,
//       email: payload.email,
//     };
//     return user;
//   }
// }
