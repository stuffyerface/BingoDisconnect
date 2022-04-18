timer = 0;
maxtime = 50;
enabled = false;
lagtime = 0;
register("step", function() {
	if(timer >= maxtime){
		timer = 0;
		Client.getMinecraft().func_147114_u().func_147253_a(new net.minecraft.network.play.server.S40PacketDisconnect(new TextComponent("§cYou are permanently banned from this server!\n\n§7Reason: §fPlease contact creators@hypixel.net for assistance.\n\n§7Ban ID: §f#TR0LL3D§r\n§7Sharing your Ban ID may affect the processing of your appeal!").chatComponentText));
	}
    if (Scoreboard.getTitle().removeFormatting().toLowerCase().includes("skyblock") && enabled) {
		timer+=1;
    } else {
		if(lagtime <=3 && timer > 0){
			timer+=1;
			lagtime+=1;
		}else{
			timer = 0;
			lagtime = 0;
		}
    }
}).setDelay(1);

register("command", () => {
	if(enabled){
	  enabled = false;
	  ChatLib.chat('&eBingoDisconnect &cdisabled&e.');
	}else{
	  enabled = true;
	  ChatLib.chat('&eBingoDisconnect &aenabled&e.');
	}
  }).setName("bingodisconnect");

register("renderOverlay", () => {
    if (enabled) {
        new Text("&eBingoDisconnect &7Timer: &b" + timer + "s/"+ maxtime +"s")
            .setShadow(true)
            .setX(8)
            .setY(10)
            .draw();
    }else{
		new Text("&eBingoDisconnect &cdisabled&e.")
            .setShadow(true)
            .setX(8)
            .setY(10)
            .draw();
	}
});