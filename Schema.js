const DownloadsModel = require("./models/DownloadsModel");
const MalwareModel = require("./models/MalwareModel");
const IPModel = require("./models/IPModel");
const InputModel = require("./models/InputModel");
const {
  GraphQLID,
  GraphQLBoolean,
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLInt,
} = require("graphql");

const AnswerType = new GraphQLObjectType({
  name: "answers",
  description: "what was returned by those scans",
  fields: {
    detected: { type: GraphQLBoolean },
    version: { type: GraphQLString },
    result: { type: GraphQLString },
    update: { type: GraphQLString },
  },
});

const scansType = new GraphQLObjectType({
  name: "scanners",
  description: "list of malware scanners",
  fields: {
    Bkav: { type: GraphQLList(AnswerType) },
    TotalDefence: { type: GraphQLList(AnswerType) },
    MicroWorld_eScan: { type: GraphQLList(AnswerType) },
    CMC: { type: GraphQLList(AnswerType) },
    McAfee: { type: GraphQLList(AnswerType) },
    Malwarebytes: { type: GraphQLList(AnswerType) },
    Zillya: { type: GraphQLList(AnswerType) },
    SUPERAntiSpyware: { type: GraphQLList(AnswerType) },
    K7AntiVirus: { type: GraphQLList(AnswerType) },
    K7GW: { type: GraphQLList(AnswerType) },
    Baidu: { type: GraphQLList(AnswerType) },
    Symantec: { type: GraphQLList(AnswerType) },
    Avast: { type: GraphQLList(AnswerType) },
    ClamAV: { type: GraphQLList(AnswerType) },
    Kaspersky: { type: GraphQLList(AnswerType) },
    BitDefender: { type: GraphQLList(AnswerType) },
    ViRobot: { type: GraphQLList(AnswerType) },
    Rising: { type: GraphQLList(AnswerType) },
    Sophos: { type: GraphQLList(AnswerType) },
    Comodo: { type: GraphQLList(AnswerType) },
    DrWeb: { type: GraphQLList(AnswerType) },
    VIPRE: { type: GraphQLList(AnswerType) },
    TrendMicro: { type: GraphQLList(AnswerType) },
    FireEye: { type: GraphQLList(AnswerType) },
    Emsisoft: { type: GraphQLList(AnswerType) },
    Ikarus: { type: GraphQLList(AnswerType) },
    Cyren: { type: GraphQLList(AnswerType) },
    Jiangmin: { type: GraphQLList(AnswerType) },
    Avira: { type: GraphQLList(AnswerType) },
    Fortinet: { type: GraphQLList(AnswerType) },
    Kingsoft: { type: GraphQLList(AnswerType) },
    Arcabit: { type: GraphQLList(AnswerType) },
    AegisLab: { type: GraphQLList(AnswerType) },
    ZoneAlarm: { type: GraphQLList(AnswerType) },
    Microsoft: { type: GraphQLList(AnswerType) },
    ALYac: { type: GraphQLList(AnswerType) },
    MAX: { type: GraphQLList(AnswerType) },
    VBA32: { type: GraphQLList(AnswerType) },
    Zoner: { type: GraphQLList(AnswerType) },
    Tencent: { type: GraphQLList(AnswerType) },
    Yandex: { type: GraphQLList(AnswerType) },
    TACHYON: { type: GraphQLList(AnswerType) },
    GData: { type: GraphQLList(AnswerType) },
    AVG: { type: GraphQLList(AnswerType) },
    Panda: { type: GraphQLList(AnswerType) },
    MicroWorld_eScan: { type: GraphQLList(AnswerType) },
    CAT_QuickHeal: { type: GraphQLList(AnswerType) },
    F_Prot: { type: GraphQLList(AnswerType) },
    ESET_NOD32: { type: GraphQLList(AnswerType) },
    TrendMicro_HouseCall: { type: GraphQLList(AnswerType) },
    NANO_Antivurus: { type: GraphQLList(AnswerType) },
    Ad_Aware: { type: GraphQLList(AnswerType) },
    F_Secure: { type: GraphQLList(AnswerType) },
    McAfee_GQ_Edition: { type: GraphQLList(AnswerType) },
    Antiy_AVL: { type: GraphQLList(AnswerType) },
    Avast_Mobile: { type: GraphQLList(AnswerType) },
    AhnLab_v3: { type: GraphQLList(AnswerType) },
    Qihoo_360: { type: GraphQLList(AnswerType) },
  },
});

const MalwaresType = new GraphQLObjectType({
  name: "Malwaretests",
  description: "First layer of malware exports",
  fields: {
    id: { type: GraphQLID },
    scans: { type: GraphQLList(scansType) },
    total: { type: GraphQLString },
    positives: { type: GraphQLString },
    scan_date: { type: GraphQLString },
    resource: { type: GraphQLString },
  },
});

const DownloadsType = new GraphQLObjectType({
  name: "Download",
  description: "Honeypot data",
  fields: {
    id: { type: GraphQLID },
    destfile: { type: GraphQLString },
    duplicate: { type: GraphQLBoolean },
    eventid: { type: GraphQLString },
    message: { type: GraphQLString },
    outfile: { type: GraphQLString },
    sensor: { type: GraphQLString },
    session: { type: GraphQLString },
    shasum: { type: GraphQLString },
    src_ip: { type: GraphQLString },
    timestamp: { type: GraphQLString },
    url: { type: GraphQLString },
  },
});
const IpType = new GraphQLObjectType({
  name: "Ipinfo",
  description: "what do you want to know?",
  fields: {
    id: { type: GraphQLID },
    ip: { type: GraphQLString },
    hostname: { type: GraphQLString },
    city: { type: GraphQLString },
    region: { type: GraphQLString },
    country: { type: GraphQLString },
    loc: { type: GraphQLString },
    org: { type: GraphQLString },
    postal: { type: GraphQLString },
    timezone: { type: GraphQLString },
    country_name: { type: GraphQLString },
    latitude: { type: GraphQLString },
    longitude: { type: GraphQLString },
    createdAt: { type: GraphQLString },
  },
});

const InputType = new GraphQLObjectType({
  name: "Input",
  description: "what did they do to you?",
  fields: {
    sensor: { type: GraphQLString },
    eventid: { type: GraphQLString },
    src_ip: { type: GraphQLString },
    input: { type: GraphQLString },
    session: { type: GraphQLString },
    timestamp: { type: GraphQLString },
    message: { type: GraphQLString },
  },
});

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    description: "root",
    fields: {
      getAllInputs: {
        type: GraphQLList(InputType),
        args: {
          count: { type: GraphQLInt },
        },
        resolve: async (parent, args, context, info) => {
          return InputModel.find().limit(args.count).exec();
        },
      },
      getAllDownloads: {
        type: GraphQLList(DownloadsType),
        args: {
          count: { type: GraphQLInt },
        },
        resolve: async (parent, args, context, info) => {
          return DownloadsModel.find().limit(args.count).exec();
        },
      },
      getDownloadByID: {
        type: DownloadsType,
        args: {
          id: { type: GraphQLNonNull(GraphQLString) },
        },
        resolve: async (parent, args, context, info) => {
          return DownloadsModel.findById(args.id).exec();
        },
      },
      getAllMalwareResults: {
        type: GraphQLList(MalwaresType),
        args: {
          count: { type: GraphQLInt },
        },
        resolve: async (parent, args, context, info) => {
          return MalwareModel.find().limit(args.count).exec();
        },
      },
      getMalwareByID: {
        type: MalwaresType,
        args: {
          id: { type: GraphQLNonNull(GraphQLString) },
        },
        resolve: async (parent, args, context, info) => {
          return MalwareModel.findById(args.id).exec();
        },
      },
      getLogByShasum: {
        type: GraphQLList(DownloadsType),
        args: {
          shasum: { type: GraphQLNonNull(GraphQLString) },
          count: { type: GraphQLInt },
        },
        resolve: async (parent, args, context, info) => {
          return DownloadsModel.find()
            .where("shasum")
            .equals(args.shasum)
            .limit(args.count)
            .exec();
        },
      },
      getMalwareByHash: {
        type: GraphQLList(MalwaresType),
        args: {
          resource: { type: GraphQLNonNull(GraphQLString) },
          count: { type: GraphQLInt },
        },
        resolve: async (parent, args, context, info) => {
          return MalwareModel.find()
            .where("resource")
            .equals(args.resource)
            .limit(args.count)
            .exec();
        },
      },
      getMalwareByPostives: {
        type: GraphQLList(MalwaresType),
        args: {
          positives: { type: GraphQLNonNull(GraphQLInt) },
        },
        resolve: async (parent, args, context, info) => {
          return MalwareModel.find()
            .where("positives")
            .gt(args.positives)
            .exec();
        },
      },
      getAllIpinfoResults: {
        type: GraphQLList(IpType),
        args: {
          count: { type: GraphQLInt },
        },
        resolve: async (parent, args, context, info) => {
          return IPModel.find().limit(args.count).exec();
        },
      },
      getAllIpinfosByDate: {
        type: GraphQLList(IpType),
        args: {
          createdAt: { type: GraphQLNonNull(GraphQLString) },
        },
        resolve: async (parent, args, context, info) => {
          return IPModel.find()
            .where("createdAt")
            .equals(args.createdAt)
            .exec();
        },
      },
      getAllIpinfosByIp: {
        type: GraphQLList(IpType),
        args: {
          ip: { type: GraphQLNonNull(GraphQLString) },
        },
        resolve: async (parent, args, context, info) => {
          return IPModel.find().where("ip").equals(args.ip).exec();
        },
      },
      getIpinfoByID: {
        type: IpType,
        args: {
          id: { type: GraphQLNonNull(GraphQLString) },
        },
        resolve: async (parent, args, context, info) => {
          return IPModel.findById(args.id).exec();
        },
      },
    },
  }),
});

module.exports = schema;
