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

`/guild cancel`{.commands}  
**Permission**: guilds.command.cancel  
If a user has an active action, it will cancel it and not proceed further with what they were trying to do.
___
`/guild confirm`{.commands}  
**Permission**: guilds.command.confirm  
If a user has an active action, it will confirm the action and continue with what they were attempting to do.
___