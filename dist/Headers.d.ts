export declare enum Auth {
    AppVersion = "X-Inti-App-Version",
    Timestamp = "X-Inti-Timestamp",
    Uuid = "X-Inti-Uuid",
    Authentication = "X-Inti-Authentication"
}
export declare enum General {
    EntityCode = "X-Inti-Entity-Code",
    Owner = "X-Inti-Owner"
}
declare const _default: {
    Auth: typeof Auth;
    General: typeof General;
};
export default _default;
