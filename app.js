"use strict";
exports.__esModule = true;
var sendbird = require("sendbird-platform-sdk-typescript");
var APP_ID = "";
var API_TOKEN = "";
var serverConfig = new sendbird.ServerConfiguration("https://api-{app_id}.sendbird.com", { "app_id": APP_ID });
var configuration = sendbird.createConfiguration({ baseServer: serverConfig });
var userAPI = new sendbird.UserApi(configuration);
var messageAPI = new sendbird.MessageApi(configuration);
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
var sendMessageData = {
    userId: '57ffeb9d-f816-44d2-82d3-6cd50fe3cbd9',
    url: "https://images.pokemontcg.io/swsh1/190_hires.png",
    messageType: 'FILE',
    message: "from ts",
    channelType: "group_channels",
    channelUrl: "sendbird_group_channel_208256492_80c42dc630eff656b69ea0cbaf48b8695da8bdab"
};
messageAPI.sendMessage(API_TOKEN, "group_channels", "sendbird_group_channel_208256492_80c42dc630eff656b69ea0cbaf48b8695da8bdab", sendMessageData).then(function (data) {
    console.log('API called successfully. Returned data: ' + data);
})["catch"](function (error) { return console.error(error); });
