
const appcode = process.env.NEXT_PUBLIC_API_PAYMENTEZ_API_CODE_S;
const appkey = process.env.NEXT_PUBLIC_API_PAYMENTEZ_API_KEY_S;

const variableTimestamp = String(Math.floor(Date.now() / 1000) + 12);
const uniq_token_string = appkey + variableTimestamp;
const uniq_token_hash = require('crypto').createHash('sha256').update(uniq_token_string).digest('hex');
const auth_token = Buffer.from(appcode + ';' + variableTimestamp + ';' + uniq_token_hash).toString('base64');

export default auth_token;