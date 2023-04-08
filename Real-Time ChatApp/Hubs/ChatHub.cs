using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace Real_Time_ChatApp.Hubs
{
    public class ChatHub:Hub
    {
        public async Task SendMessage(string fromUser,string message)
        {
            await Clients.All.SendAsync("receivemessage",fromUser, message);
        }
    }
}
