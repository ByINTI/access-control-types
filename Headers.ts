export enum Auth {
    AppVersion = "X-Inti-App-Version",
    Timestamp = "X-Inti-Timestamp",
    Uuid = "X-Inti-Uuid",
    Authentication = "X-Inti-Authentication"
};

export enum General {
    EntityCode = "X-Inti-Entity-Code",
    Owner = "X-Inti-Owner",
};

export default {
    Auth,
    General,
};
