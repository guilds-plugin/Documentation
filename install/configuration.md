# Configuration

The `config.yml` file will be created on the first server startup.

The config file *should* automatically update with the new additions added in an update.

## Table of Contents

### Important Settings

* [Plugin Announcements](#announcements)
* [Messages Language](#messageslanguage)
* [Update Checking](#update-check)

### Hook Settings

* [Essentials Chat](#essentials-chat)
* [WorldGuard Claims](#worldguard-claims)

### GUI Settings

* [Guild List](#guild-list)
* [Guild Buffs](#guild-buffs)

### Guild Settings

* [Requirements](#requirements)
* [Blacklist](#blacklist)
* [Format](#format)
* [Damage](#damage)

### Timers

* [Cooldowns](#cooldowns)
* [Warmups](#warmups)

### Costs

* [Creation](#cost)
* [Home Setting](#cost)

### Claims

* [Radius](#radius)
* [Intro and Exit Messages](#intro-and-exit-messages)
* [Disabled Worlds](#disabled-worlds)

## Descriptions

### Settings

#### `announcements`

The part of the config that controls the announcements from the plugin developer to servers OPs and Owners.

This can be used in a few instances such as letting them know of an important bug to be aware of, if there's an update ready to go, or general messages that the developer finds important for the users to know.

**Example**

```YAML
console: true
in-game: true
```

___

#### `messagesLanguage`

Choosing your language for the plugin is pretty simple. In the language folder (`/Guilds/languages/`), you can see a list of all the languages that are currently in the plugin. Please understand that not all languages are fully translated, but you can finish a translation and submit it if interested!

**Example**
```YAML
messagesLanguage: en-US
```
___

#### `update-check`

Would you like to check for plugin updates on startup? It's highly suggested you keep this enabled!

**Example**
```YAML
update-check: true
```
___
### Hooks

#### `essentials-chat`

Do we want to hook into Essentials-Chat format to handle guild placeholders?

**Example**
```YAML
essentials-chat: false
```
___

#### `worldguard-claims`

Do we want to hook into WorldGuard to allow claiming land?

**Example**
```YAML
worldguard-claims: false
```
___
### GUIs

#### `Guild List`

Detailed explanation and configuration of how the Guild List works.

**Example**
```YAML
    guild-list:
        # What should the name of the inventory be?
        gui-name: Guild List
        # What should the name of the all the items be in the inventory?
        item-name: '&f{player}''s Guild'
        # What item should players click to go to the next page?
        next-page-item: EMPTY_MAP
        # What should the name of this item be?
        next-page-item-name: '&fNext Page'
        # What item should players click to go to the previous page?
        previous-page-item: EMPTY_MAP
        # What should the name of this item be?
        previous-page-item-name: '&fPrevious Page'
        # What item should players be able to hover over to see what page they are currently on?
        page-number-item: DIAMOND_BLOCK
        # What should the name of this item be?
        page-number-item-name: '&fPage: {page}'
        # What should be the default texture url for textures that fail to load in?
        head-default-url: http://textures.minecraft.net/texture/1a1654ce1fd5deea16c151586f21c63d130f1a5a122eef098133b4f92f6f55
        # You are free to design this to your liking
        # This is just an example of all the available placeholders that you can use for the lore!
        head-lore: 
        - '&cName&8: &a{guild-name}'
        - '&cPrefix&8: &a{guild-prefix}'
        - '&cMaster&8: &a{guild-master}'
        - '&cStatus&8: &a{guild-status}'
        - '&cTier&8: &a{guild-tier}'
        - '&cBalance&8: &a{guild-balance}'
        - '&cMember Count&8: &a{guild-member-count}'
```
___

#### `Guild Buffs`

Detailed explanation and configuration of how Guild Buffs work.

**Example**
```YAML
    guild-buffs:
        # What should the name of the inventory be?
        gui-name: Guild Buffs
        # Do we want to allow users to have more than one buff at a time?
        buff-stacking: false
        haste:
            # What do you want to name the buff?
            name: Substance of the Redmod Graff
            # How much do you want the buff to cost?
            price: 60.0
            # How long (in second) should the buff last?
            time: 60
            # How strong do you want the buff to be? 0 = Potion Level 1, 1 = Potion Level 2, etc...
            amplifier: 0
            # What item do you want to represent the buff?
            icon: FEATHER
            # You can put as much as you want here
            description: 
            - '&bThis buff will allow you and your'
            - '&bGuild Members to obtain increased'
            - '&bmining speed for a certain amount of time.'
            # Do you want this buff to show in-game?
            display: true
        speed:
            # What do you want to name the buff?
            name: Blessing of the Cheetah
            # How much do you want the buff to cost?
            price: 60.0
            # How long (in second) should the buff last?
            time: 60
            # How strong do you want the buff to be? 0 = Potion Level 1, 1 = Potion Level 2, etc...
            amplifier: 0
            # What item do you want to represent the buff?
            icon: SUGAR
            # You can put as much as you want here
            description: 
            - '&bThis buff will allow you and your'
            - '&bGuild Members to obtain increased'
            - '&bmovement speed for a certain amount of time.'
            # Do you want this buff to show in-game?
            display: true
        fire-resistance:
            # What do you want to name the buff?
            name: Scales of the Dragon
            # How much do you want the buff to cost?
            price: 60.0
            # How long (in second) should the buff last?
            time: 60
            # How strong do you want the buff to be? 0 = Potion Level 1, 1 = Potion Level 2, etc...
            amplifier: 0
            # What item do you want to represent the buff?
            icon: BLAZE_POWDER
            # You can put as much as you want here
            description: 
            - '&bThis buff will allow you and your'
            - '&bGuild Members to obtain increased'
            - '&bfire resistance for a certain amount of time.'
            # Do you want this buff to show in-game?
            display: true
        night-vision:
            # What do you want to name the buff?
            name: Eyes of the Lurking Demon
            # How much do you want the buff to cost?
            price: 60.0
            # How long (in second) should the buff last?
            time: 60
            # How strong do you want the buff to be? 0 = Potion Level 1, 1 = Potion Level 2, etc...
            amplifier: 0
            # What item do you want to represent the buff?
            icon: REDSTONE_TORCH_ON
            # You can put as much as you want here
            description: 
            - '&bThis buff will allow you and your'
            - '&bGuild Members to obtain increased'
            - '&bnight vision for a certain amount of time.'
            # Do you want this buff to show in-game?
            display: true
        invisibility:
            # What do you want to name the buff?
            name: Feet of the Ghostly Walker
            # How much do you want the buff to cost?
            price: 60.0
            # How long (in second) should the buff last?
            time: 60
            # How strong do you want the buff to be? 0 = Potion Level 1, 1 = Potion Level 2, etc...
            amplifier: 0
            # What item do you want to represent the buff?
            icon: EYE_OF_ENDER
            # You can put as much as you want here
            description: 
            - '&bThis buff will allow you and your'
            - '&bGuild Members to obtain increased'
            - '&binvisibility for a certain amount of time.'
            # Do you want this buff to show in-game?
            display: true
        strength:
            # What do you want to name the buff?
            name: Mighty Strength of the Pouncing Lion
            # How much do you want the buff to cost?
            price: 60.0
            # How long (in second) should the buff last?
            time: 60
            # How strong do you want the buff to be? 0 = Potion Level 1, 1 = Potion Level 2, etc...
            amplifier: 0
            # What item do you want to represent the buff?
            icon: DIAMOND_SWORD
            # You can put as much as you want here
            description: 
            - '&bThis buff will allow you and your'
            - '&bGuild Members to obtain increased'
            - '&bstrength for a certain amount of time.'
            # Do you want this buff to show in-game?
            display: true
        jump:
            # What do you want to name the buff?
            name: Bounce of the Quick Witted Rabbit
            # How much do you want the buff to cost?
            price: 60.0
            # How long (in second) should the buff last?
            time: 60
            # How strong do you want the buff to be? 0 = Potion Level 1, 1 = Potion Level 2, etc...
            amplifier: 0
            # What item do you want to represent the buff?
            icon: DIAMOND_BOOTS
            # You can put as much as you want here
            description: 
            - '&bThis buff will allow you and your'
            - '&bGuild Members to obtain increased'
            - '&bjump for a certain amount of time.'
            # Do you want this buff to show in-game?
            display: true
        water-breathing:
            # What do you want to name the buff?
            name: Bounce of the Quick Witted Rabbit
            # How much do you want the buff to cost?
            price: 60.0
            # How long (in second) should the buff last?
            time: 60
            # How strong do you want the buff to be? 0 = Potion Level 1, 1 = Potion Level 2, etc...
            amplifier: 0
            # What item do you want to represent the buff?
            icon: DIAMOND_BOOTS
            # You can put as much as you want here
            description: 
            - '&bThis buff will allow you and your'
            - '&bGuild Members to obtain increased'
            - '&bwater-breathing for a certain amount of time.'
            # Do you want this buff to show in-game?
            display: true
        regeneration:
            # What do you want to name the buff?
            name: Bounce of the Quick Witted Rabbit
            # How much do you want the buff to cost?
            price: 60.0
            # How long (in second) should the buff last?
            time: 60
            # How strong do you want the buff to be? 0 = Potion Level 1, 1 = Potion Level 2, etc...
            amplifier: 0
            # What item do you want to represent the buff?
            icon: DIAMOND_BOOTS
            # You can put as much as you want here
            description: 
            - '&bThis buff will allow you and your'
            - '&bGuild Members to obtain increased'
            - '&bregeneration for a certain amount of time.'
            # Do you want this buff to show in-game?
            display: true
```
### Guild

### `Requirements`

Configuration requirements for the characters allowed to be used in the name and the prefix.


**Example**
```YAML
# With the default RegEx currently set, the minimum length of the prefix is 1 and the maximum is 64.
# To change this, adjust the number and you can refer to the link below on how to modify RegEx.
# RegEx (https://en.wikipedia.org/wiki/Regular_expression) used to only allow certain characters (default only allows alphanumeric characters).
# To turn off the ability to use colors, remove the & from the RegEx.
name: '[a-zA-Z0-9&]{1,64}'
prefix: '[a-zA-Z0-9&]{1,20}'
```
___

### `Blacklist`

Configuration for blacklisting names and phrases to be used for Guild names and prefixes.

**Example**
```YAML
# Do we want to enable the blacklist?
enabled: true
# What words would you like to blacklist from being used?
words: 
- crap
- ass
- stupid
```
___

#### `Format`

Configuration for setting up the chat format for guild chat and the admin spy chat.

**Example**
```YAML
# This is the style used when a message sent in guild chat.
chat: '&7&l[Guild Chat]&r &b[{role}&b]&r &b {player}: {message}'
# Similar to the one above, just for the admins spying.
spy: '&7&l[Guild Spy]&r &b[{guild}&b]&r &b[{role}&b]&r &b {player}: {message}'
```
___

#### `Damage`

Configuration for modifying if a player is allowed to damage other people in their guild / ally

**Example**
```YAML
# Do we want people in the same guild to be able to damage each other?
guild: false
# Do we want allies to be able to damage each other?
ally: false
```
___

### Timers

#### `Cooldowns`

Configuration for modifying the cooldown of some commands

**Example**
```YAML
# How often (in seconds) can a player set their guild home?
sethome: 60
# How often (in seconds) can a player go to their guild home?
home: 60
```
___

#### `Warmups`

Configuration for modifying the warmup of actions

**Example**
```YAML
# How long should a user have to stand still before teleporting?
home: 3
```
___

### Cost

The cost section is pretty simple. You can set a price for a few things in the plugin.

**Example**
```YAML
# How much should it cost to create a guild?
creation: 0.0
# How much should it cost to set the cost of the guild home?
sethome: 0.0
```
___

### Claims

This section of the config will allow you to handle guild land claiming. Remember that the enable / disable for this is the WorldGuard Hook at the TOP of the config. here are multiple options when it comes to guild claims. For the time being, all guilds will only get one claim. (Soon to be expected to change in 3.5 or 3.6)

#### `Radius`

This is the number of blocks around the player it will try to create the region. Keep in mind this is the RADIUS, it will go this many blocks in both directions. For example, if you take the default 15, it'll do 30 total as it will go 15 blocks in both directions. This is a CUBOID region, not SPHERE.

**Example**
```YAML
radius: 15
```
___

#### `Intro and Exit Messages`

Customize the entrance and exit message of joining claims. Supports {prefix} for guild prefix and {guild} for guild name. Also supports color codes!

**Example**
```YAML
enter-message: '&aNow entering &d{guild}''s &aclaim!'
exit-message: '&aNow leaving &d{guild}''s &aclaim!'
```
___

#### `Disabled Worlds`

Would you like to disable guild claiming in specific worlds?

**Example**
```YAML
disabled-worlds:
- ''
```
___
