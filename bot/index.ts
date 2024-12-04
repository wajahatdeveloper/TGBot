const { Telegraf } = require('telegraf');
const { BOT_TOKEN, WEBAPP_URL } = require('./config');

if (!BOT_TOKEN) {
  throw new Error('BOT_TOKEN must be provided!');
}

const bot = new Telegraf(BOT_TOKEN);

// Set the webhook (only once)
const setWebhook = async () => {
  try {
    var url = `${process.env.WEBHOOK_URL}/api/bot`;
    await bot.telegram.setWebhook(url);
    console.log('Webhook set successfully ' + url);
  } catch (error) {
    console.error('Error setting webhook:', error);
  }
};

// Ensure webhook is set
setWebhook();

// Basic commands
bot.command('start', (ctx: any) => {
  ctx.reply('Welcome to Ark Game Bot! 🚀\nUse /help to see available commands.');

  const userId = ctx.from.id;
  //ctx.reply(`Hello! Your user ID is: ${userId}`);
});

bot.command('help', (ctx: any) => {
  ctx.reply(
    'Available commands:\n' +
    '/start - Start the bot\n' +
    '/help - Show this help message\n' +
    '/webapp - Open the Mini App'
  );
});

bot.command('webapp', (ctx: any) => {
  const chatId = ctx.chat.id;
  // Encode le chatId en base64
  const encodedGroupId = Buffer.from(chatId.toString()).toString('base64');
  
  console.log('Chat ID:', chatId);
  console.log('Encoded Group ID:', encodedGroupId);
  
  ctx.reply('Open Web App', {
    reply_markup: {
      inline_keyboard: [[
        { text: "Open App", url: `${WEBAPP_URL}?startapp=${encodedGroupId}` }
      ]]
    }
  });
});

bot.launch().then(() => {
  console.log('Bot is running...');
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));