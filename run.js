const MusicBot = require('discord-musicbot');

const config = {
  // these 3 are always required.
  token: 'NDYwNDcwNjE4Njg1NDQwMDAw.DhFONA.RD-pF23FlXJwLo22alwfz4sz_pY',
  serverId: '443439919227076608',
  textChannelId: '443439919227076610',

  // permissions is technically optional, but if you want to access to all
  // permissions you'll need to at the very least make yourself an admin.
  permissions: {
    users: {
      'YOUR USER ID': '378074425066520577',
    },
  }
};

const musicBot = new MusicBot(config);

client.login(process.env.BOT_TOKEN);
