const handler = async (m, {conn}) => {
  m.reply(global.infopingui);
};
handler.command = /^(info|infobot|infopingui)$/i;
export default handler;

global.infopingui = `
𝗕𝗼𝘁 𝗞𝗰𝗵𝗲𝗿𝗼 💦

𝗖𝗿𝗲𝗮𝗱𝗼𝗿 : 𝗖𝗿𝗶𝘀𝘁𝗵𝗼𝗳𝗲𝗿 𝗬𝗮𝗹𝗹𝗶𝗰𝗼
𝗡𝘂𝗺𝗲𝗿𝗼 : +51 926 933 818
𝗛𝗼𝘀𝘁 : 𝗖𝗮𝗳𝗶𝗿𝗲𝘅𝗼𝘀
`;
