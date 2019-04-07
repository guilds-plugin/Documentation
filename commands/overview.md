# Overview

Understanding how the commands work in the project is super simple. All you have to do is type `/guilds` and you will be presented with a very nice-looking help menu!

![HelpMenu](../.vuepress/public/helpmenu.png)
___

### Aliases

Since Guilds is such a big project, we knew that it can get repetitive typing out full commands each time so we have made the follow aliases work so you don't have to type everything out each time. Use whichever you want!

| Possible Options |
| ---------------- |
| /guilds          |
| /guild           |
| /g               |
___

## Understanding

// Add stuff later

## Action Commands
Action commands control the user's choice to proceed with some of the commands in the plugin. We know that some people get curious when playing with commands and we've designed the commands that cause bigger changes to ask for a confirmation.

`/guild cancel`{.command}  
**Permission**: guilds.command.cancel  
If a user has an active action, it will cancel it and not proceed further with what they were trying to do.
___
`/guild confirm`{.command}  
**Permission**: guilds.command.confirm  
If a user has an active action, it will confirm the action and continue with what they were attempting to do.
___

## Admin Commands
Admin commands are basically self-understandable. They give you the power over how the plugin is used and can do many things to modify how the plugin works.

`/guild admin addplayer <player> <guild>`{.command}  
**Permission**: guilds.command.admin  
Allows you to put a player into a guild by force.
___
`/guild admin prefix <guild> <prefix>`{.command}  
**Permission**: guilds.command.admin  
Allows you to change the prefix of a guild by force.
___
`/guild admin remove <guild>`{.command}  
**Permission**: guilds.command.admin  
Allows you to remove a guild as a whole by force.
___
`/guild admin removeplayer <player>`{.command}  
**Permission**: guilds.command.admin  
Allows you to remove a player from their guild by force.
___
`/guild admin rename <guild> <new name>`{.command}  
**Permission**: guilds.command.admin  
Allows you change the current name of a guild by force.
___
`/guild admin spy`{.command}  
**Permission**: guilds.command.admin  
Toggles the ability to see all guild chat.
___
`/guild admin status <guild>`{.command}  
**Permission**: guilds.command.admin  
Toggle the status of a guild by force.
___
`/guild admin upgrade <guild>`{.command}  
**Permission**: guilds.command.admin  
Force upgrade a guild's tier.
___
`/guild admin vault <guild> <vault #>`{.command}  
**Permission**: guilds.command.admin  
Open any guild's vault
___