<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
</head>

<body>
  Webchat
  <script src="https://cdn.jsdelivr.net/npm/botfuel-webchat-client@3.7.0"></script>
  <script>
    BotfuelWebChat.init({
      size: { width: 500, height: 600 },
      appToken: process.env.BOTFUEL_APP_TOKEN,
      startOpen: false,
      startFullScreen: false
    });
  </script>
</body>

</html>