import * as sendbird from 'sendbird-platform-sdk-typescript';
const APP_ID = "";
const API_TOKEN = "";
const serverConfig = new sendbird.ServerConfiguration("https://api-{app_id}.sendbird.com", { "app_id": APP_ID })
const configuration = sendbird.createConfiguration({ baseServer: serverConfig });
const userAPI = new sendbird.UserApi(configuration);
const messageAPI = new sendbird.MessageApi(configuration);

// List users, use the next token in the response to get the next page of users in subsequent requests
// userAPI.listUsers(API_TOKEN, '', 10).then((users) => {
//     console.log("Listing first 10 users:\n")
//     console.log(users)
// }).catch((error) => {
//     console.log("Error listing users")
//     console.log(error)
// })
// How to create a user
// const userData: sendbird.CreateUserData = {
//     userId: "bob_smith",
//     nickname: "Bob",
//     profileUrl: "https://cataas.com/c"
// }
// userAPI.createUser(API_TOKEN, userData).then((user) => {
//     console.log("User created:\n")
//     console.log(user)
// }).catch((error) => {
//     console.log("Error creating user:")
//     console.log(error)
// })


const sendMessageData: sendbird.SendMessageData = {
    userId: '57ffeb9d-f816-44d2-82d3-6cd50fe3cbd9',
    url: "https://images.pokemontcg.io/swsh1/190_hires.png",
    messageType: 'FILE',
    message: "from ts",
    channelType: "group_channels",
    channelUrl: "sendbird_group_channel_208256492_80c42dc630eff656b69ea0cbaf48b8695da8bdab"
}

messageAPI.sendMessage(API_TOKEN, "group_channels", "sendbird_group_channel_208256492_80c42dc630eff656b69ea0cbaf48b8695da8bdab", sendMessageData).then((data: any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: any) => console.error(error));