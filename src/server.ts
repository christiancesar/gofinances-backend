import app from './app';

app.listen(process.env.PORT, () => {
  console.log(`🚀 GoFinances started on port ${process.env.PORT}!`);
});
