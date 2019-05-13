# Configuration

The `config.yml` file will be created on the first server startup.

The config file *should* automatically update with the new additions added in an update.

## Table of Contents

### Important Settings

* [Plugin Announcements](#announcements)
* [Messages Language](#messageslanguage)
* [Update Languages](#player-update-languages)
* [Save Interval](#save-interval)
* [Update Checking](#update-check)

### Hook Settings

* [Essentials Chat](#essentials-chat)
* [WorldGuard Claims](#worldguard-claims)

### GUI Settings

* [Guild List](#guild-list)
* [Guild Buffs](#guild-buffs)
* [Guild Vault Picker](#vault-picker)
* [Guild Vaults](#guild-vaults)
* [Guild Info](#guild-info)
* [Guild Info Members](#guild-info-members)

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

### Tablist

* [Enabled / Disabled Options](#enabled-disabled-options)
* [Format](#format-2)

### Tickets

* [Name](#name)
* [Lore](#lore)
* [Material](#material)

### Codes

* [Length](#length)
* [List Inactive Codes](#list-inactive-codes)
* [Amount](#amount)

### Tiers

* [Carry Over](#carry-over)
* [Tier Overview](#tier-overview)

### Roles

* [Role Overview](#role-overview)

## Descriptions

### Settings

#### `announcements`{#config-option}

The part of the config that controls the announcements from the plugin developer to servers OPs and Owners.

This can be used in a few instances such as letting them know of an important bug to be aware of, if there's an update ready to go, or general messages that the developer finds important for the users to know.

**Example**

```YAML
console: true
in-game: true
```
___

#### `messagesLanguage`{#config-option}

Choosing your language for the plugin is pretty simple. In the language folder (`/Guilds/languages/`), you can see a list of all the languages that are currently in the plugin. Please understand that not all languages are fully translated, but you can finish a translation and submit it if interested!

**Example**
```YAML
messagesLanguage: en-US
```
___

#### `player-update-languages`{#config-option}  

Would you like to allow admin players to update the languages via command?  
If yes, set to true, and they will be able to run /guild admin update-languages  
If no, set to false, and the command will only run via console.  

**Example**
```YAML
 player-update-languages: false
 ```
 ___

 #### `save-interval`{#config-option}  

 How often (in minutes) do you want all Guild Data to save?  

 **Example**
 ```YAML
 save-interval: 1
 ```
 ___


#### `update-check`{#config-option}

Would you like to check for plugin updates on startup? It's highly suggested you keep this enabled!

**Example**
```YAML
update-check: true
```
___
### Hooks

#### `essentials-chat`{#config-option}

Do we want to hook into Essentials-Chat format to handle guild placeholders?

**Example**
```YAML
essentials-chat: false
```
___

#### `worldguard-claims`{#config-option}

Do we want to hook into WorldGuard to allow claiming land?

**Example**
```YAML
worldguard-claims: false
```
___
### GUIs

#### `Guild List`{#config-option}

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

#### `Guild Buffs`{#config-option}

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
___

#### `Vault Picker`{#config-option}

Here you can control what the GUI looks like that allows players to choose which vault to open.  
You can do things like set the name of the gui, the material to use, material name, and lore!  

**Example**
```YAML
    vault-picker:
        # What do you want the name of the gui to be?
        # Currently supports {name} for the name of the guild.
        name: '&8» &r{name}''s Vaults'
        # How many rows would you like to display?
        rows: 1
        # What do you want the material of the vaults to be?
        item-material: CHEST
        # What do you want the name of the vault to be?
        # I recommend keeping this blank so that we can put the vault number in the lore.
        item-name: ' '
        item-lore: 
        - '&8• &7Vault &9#{number}'
        - '&8• &7Status: {status}'
        - ''
        # What do you want to show when a vault is unlocked?
        unlocked: '&9Unlocked'
        # What do you want to show when a vault is locked?
        locked: '&c&mLocked&r'
```
___

#### `Guild Vaults`{#config-option}  

**Example**
```YAML
    vault:
        # What do you want the name of the Vault to be?
        # Note: This requires a restart to change the inventory names.
        name: '&8» &rGuild &aVault'
        blacklist:
            # What materials would you like to blacklist from being put into the vaults?
            materials: 
            - ''
            # What custom names of items would you like to blacklist from being put into the vaults?
            names: 
            - ''
            # What custom lore do you want to blacklist from being put into the vaults?
            # Please keep in mind this can be prove to false-positives so please let me know if you have issues.
            # This will currently loop through your lore to check for any strings you have in the list to check.
            # Improvements will be made over time. Thanks for your patience and suppport in advanced.
            lores: 
            - ''
```
___

#### `Guild Info`{#config-option}  

Welcome to the Guild Info GUI section of the config.  
Here you can modify the configuration of what the Guild Info GUI looks like.  
This can be used by any member of a Guild and shows key information of the Guild.  
You can see things like the members, the balance, tier, etc.  

**Example**
```YAML
    guild-info:
        # What would you like the name of the GUI to be?
        # Currently supports {name} for the name of the guild and {prefix} for the prefix of the guild
        name: '&8» &r{name}''s Info'
        # What material do you want the tier button to be?
        tier-material: DIAMOND
        # What do you want the name of the tier button to be?
        tier-name: '&3Guild Tier'
        # What do you want the lore of the tier button to be?
        tier-lore: 
        - '&8• &7Level: &b{tier}'
        # What material do you want the bank button to be?
        bank-material: GOLD_INGOT
        # What do you want the name of the bank button to be?
        bank-name: '&6Guild Bank'
        # What do you want the lore of the bank button to be?
        bank-lore: 
        - '&8• &7Balance: &e{current} &7/ &e{max}'
        # What material do you want the members button to be?
        members-material: IRON_HELMET
        # What do you want the name of the members button to be?
        members-name: '&5Guild Members'
        # What do you want the lore of the members button to be?
        members-lore: 
        - '&8• &7Members: &d{current} &7/ &d{max}'
        - '&8• &7Online: &d{online} &7/ &d{current}'
        - ''
        - '&7Click to view members!'
        status-material:
            # What material do you want the status button to be when a guild is public?
            public: EMERALD
            # What material do you want the status button to be when a guild is private?
            private: REDSTONE
        # What do you want the name of the status button to be?
        status-name-item: '&2Guild Status'
        status-name:
            # What do you want the status to say if it's public?
            public: '&aPublic'
            # What do you want the status to say if it's private?
            private: '&cPrivate'
        # What do you want the lore of the status button to be?
        status-lore: 
        - '&8• &7Status: &r{status}'
        # What material do you want the home button to be?
        home-material: BED
        # What do you want the name of the home button to be?
        home-name: '&cGuild Home'
        # What do you want the lore of the home button to be?
        home-lore: 
        - '&8• &7Home: &f{coords}'
        # What do you want it to say when a guild doesn't have a home set?
        home-empty: '&fNot Set'
        # Do you want players to be teleported to their guild home when they click this?
        home-teleport: false
        # What material do you want the vault button to be?
        vault-material: CHEST
        # What do you want the name of the home button to be?
        vault-name: '&9Guild Vaults'
        # What do you want the lore of the vault button to be?
        vault-lore: 
        - '&7Click here to open your guild vaults!'
```
___

#### `Guild Info Members`{#config-option}  

This part of the config controls what the members gui looks like.  
You can get to this in game by clicking on the members icon via the guild info gui.  

```YAML
    guild-info-members:
        # What would you like the name of the GUI to be?
        name: '&8» &rMembers of {name}'
        item:
            # What material do you want to use to represent members?
            material: EMPTY_MAP
            # What do you want the name of the item to be?
            name: ' '
            # What do you want the lore of the item to be?
            lore: 
            - '&8• &7Name: &a{name}'
            - '&8• &7Role: &a{role}'
            - '&8• &7Status: {status}'
            - ''
            # What do you want to be what shows when a member is online?
            online: '&aOnline'
            # What do you want to be what shows when a member is offline?
            offline: '&cOffline'
```
___



### Guild

#### `Requirements`{#config-option}

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

#### `Blacklist`{#config-option}

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

#### `Format`{#config-option}

Configuration for setting up the chat format for guild chat and the admin spy chat.

**Example**
```YAML
# This is the style used when a message sent in guild chat.
chat: '&7&l[Guild Chat]&r &b[{role}&b]&r &b {player}: {message}'
# Similar to the one above, just for the admins spying.
spy: '&7&l[Guild Spy]&r &b[{guild}&b]&r &b[{role}&b]&r &b {player}: {message}'
```
___

#### `Damage`{#config-option}

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

#### `Cooldowns`{#config-option}

Configuration for modifying the cooldown of some commands

**Example**
```YAML
# How often (in seconds) can a player set their guild home?
sethome: 60
# How often (in seconds) can a player go to their guild home?
home: 60
```
___

#### `Warmups`{#config-option}

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

#### `Radius`{#config-option}

This is the number of blocks around the player it will try to create the region. Keep in mind this is the RADIUS, it will go this many blocks in both directions. For example, if you take the default 15, it'll do 30 total as it will go 15 blocks in both directions. This is a CUBOID region, not SPHERE.

**Example**
```YAML
radius: 15
```
___

#### `Intro and Exit Messages`{#config-option}

Customize the entrance and exit message of joining claims. Supports {prefix} for guild prefix and {guild} for guild name. Also supports color codes!

**Example**
```YAML
enter-message: '&aNow entering &d{guild}''s &aclaim!'
exit-message: '&aNow leaving &d{guild}''s &aclaim!'
```
___

#### `Disabled Worlds`{#config-option}

Would you like to disable guild claiming in specific worlds?

**Example**
```YAML
disabled-worlds:
- ''
```
___

### Tablist

#### `Enabled / Disabled Options`{#config-option}

**Example**
```YAML
tablist:
# Should the plugin use the built-in tablist?
enabled: false
# Would you like to display a user's display name instead of their MC username?
display-name: false
```
___

#### `Format`{#config-option}

Change how the Prefixes in the TabList show!
Note: DO NOT REMOVE THE {guild}.
You can use {prefix} to show the Guild Prefix instead if you would like.

**Example**
```YAML
format: '&7[&b{guild}&7]&r'
```
___

### Tickets

#### `Name`{#config-option}

What do you want the name of the upgrade ticket to be?

**Example**
```YAML
name: '&bGuild Upgrade Ticket'
```
___

#### `Lore`{#config-option}

What do you want the lore of the ticket to be?

**Example**
```YAML
lore: 
- '&dRight click this ticket to upgrade your guild tier!'
```
___

#### `Material`{#config-option}

What do you want the material of the ticket to be?

**Example**
```YAML
material: PAPER
```
___

### Codes

#### `Length`{#config-option}
How long do you want the default length of guild codes to be?

**Example**
```YAML
length: 7
```
___

#### `List Inactive Codes`{#config-option}

Do you want inactive codes (no uses left) to display on the /guild code list?

**Example**
```YAML
list-inactive-codes: true
```
___

#### `Amount`{#config-option}

What is the max amount of active codes you would like to allow per guild?

**Example**
```YAML
amount: 10
```
___

### Tiers

This section of the config will talk about various parts of upgrading a guild and allow you to choose how it works. For "mob-xp-multiplier" the default is 1, meaning that it will drop the normal amount of XP for non-upgraded guilds. DO NOT set it to 0, that will either throw errors or cause mobs to not drop XP. Keep in mind for the damage-multiplier, it applies to players also, so by default it's set to normal for every tier.

#### `Carry Over`{#config-option}

Should permissions carry over between tiers?

**Example**
```YAML
carry-over: true
```
___

#### `Tier Overview`{#config-option}

**Example**
```YAML
    list:
        1:
            # Which level tier is this? 1 is the default.
            level: 1
            # What is the name of this tier?
            name: Bronze
            # How much is this tier? (If first tier, keep as same price as cost creation)
            cost: 0.0
            # How many members can be in a guild of this tier?
            max-members: 15
            # How many Vaults would you like the Guild to be able to use?
            vault-amount: 1
            # How much extra XP should drop from mobs?
            mob-xp-multiplier: 1.0
            # How much extra damage should be done?
            damage-multiplier: 1.0
            # How much can this tier hold in the bank?
            max-bank-balance: 10000.0
            # How many members should be in a guild for it to be able to rankup?
            members-to-rankup: 0
            # If you wish to give this tier extra permissions, put them here.
            permissions: 
            - ''
        2:
            # Which level tier is this? 1 is the default.
            level: 2
            # What is the name of this tier?
            name: Silver
            # How much is this tier? (If first tier, keep as same price as cost creation)
            cost: 200.0
            # How many members can be in a guild of this tier?
            max-members: 30
            # How many Vaults would you like the Guild to be able to use?
            vault-amount: 2
            # How much extra XP should drop from mobs?
            mob-xp-multiplier: 2.0
            # How much extra damage should be done?
            damage-multiplier: 1.0
            # How much can this tier hold in the bank?
            max-bank-balance: 20000.0
            # How many members should be in a guild for it to be able to rankup?
            members-to-rankup: 0
            # If you wish to give this tier extra permissions, put them here.
            permissions: 
            - ''
        3:
            # Which level tier is this? 1 is the default.
            level: 3
            # What is the name of this tier?
            name: Gold
            # How much is this tier? (If first tier, keep as same price as cost creation)
            cost: 300.0
            # How many members can be in a guild of this tier?
            max-members: 50
            # How many Vaults would you like the Guild to be able to use?
            vault-amount: 3
            # How much extra XP should drop from mobs?
            mob-xp-multiplier: 3.0
            # How much extra damage should be done?
            damage-multiplier: 1.0
            # How much can this tier hold in the bank?
            max-bank-balance: 30000.0
            # How many members should be in a guild for it to be able to rankup?
            members-to-rankup: 0
            # If you wish to give this tier extra permissions, put them here.
            permissions: 
            - ''
```
___

### Roles

#### `Role Overview`{#config-option}

**Example**
```YAML
roles:
    0:
    # The name of the role
        name: GuildMaster
        # The permission node of the roll
        permission-node: guilds.role.master
        permissions:
        # Can they buy buffs?
            activate-buff: true
            # Can they add allies?
            add-ally: true
            # Can they talk to allies?
            ally-chat: true
            # Can they set the home?
            change-home: true
            # Can they change the prefix?
            change-prefix: true
            # Can they rename the guild?
            rename: true
            # Can they talk in guild chat?
            chat: true
            # Can they demote others?
            demote: true
            # Can they put money in the bank?
            deposit-money: true
            # Can they invite others?
            invite: true
            # Can they kick others?
            kick: true
            # Can they open the guild vault?
            open-vault: true
            # Can they promote others?
            promote: true
            # Can they remove allies?
            remove-ally: true
            # Can they delete the guild?
            remove-guild: true
            # Can they toggle the status of the guild?
            toggle-guild: true
            # Can they transfer the guild to someone else?
            transfer-guild: true
            # Can they upgrade the guild?
            upgrade-guild: true
            # Can they take money from the bank?
            withdraw-money: true
            # Can they claim land?
            claim-land: true
            # Can they unclaim land?
            unclaim-land: true
            # Can they destroy blocks in claims?
            destroy: true
            # Can they place blocks in claims?
            place: true
            # Can they interact with blocks in claims?
            interact: true
            # Can they create codes?
            create-code: true
            # Can they delete codes?
            delete-code: true
            # Can they see who redeemed codes?
            see-code-redeemers: true
    1:
        name: Officer
        permission-node: guilds.role.officer
        permissions:
            activate-buff: false
            add-ally: true
            ally-chat: true
            change-home: true
            change-prefix: false
            rename: false
            chat: true
            demote: true
            deposit-money: true
            invite: true
            kick: true
            open-vault: true
            promote: true
            remove-ally: true
            remove-guild: false
            toggle-guild: false
            transfer-guild: false
            upgrade-guild: false
            withdraw-money: true
            claim-land: false
            unclaim-land: false
            destroy: true
            place: true
            interact: true
            create-code: true
            delete-code: true
            see-code-redeemers: true
    2:
        name: Veteran
        permission-node: guilds.role.veteran
        permissions:
            activate-buff: false
            add-ally: false
            ally-chat: true
            change-home: false
            change-prefix: false
            rename: false
            chat: true
            demote: false
            deposit-money: true
            invite: true
            kick: false
            open-vault: true
            promote: false
            remove-ally: false
            remove-guild: false
            toggle-guild: false
            transfer-guild: false
            upgrade-guild: false
            withdraw-money: false
            claim-land: false
            unclaim-land: false
            destroy: true
            place: true
            interact: true
            create-code: false
            delete-code: false
            see-code-redeemers: false
    3:
        name: Member
        permission-node: guilds.role.member
        permissions:
            activate-buff: false
            add-ally: false
            ally-chat: true
            change-home: false
            change-prefix: false
            rename: false
            chat: true
            demote: false
            deposit-money: true
            invite: false
            kick: false
            open-vault: true
            promote: false
            remove-ally: false
            remove-guild: false
            toggle-guild: false
            transfer-guild: false
            upgrade-guild: false
            withdraw-money: false
            claim-land: false
            unclaim-land: false
            destroy: true
            place: true
            interact: true
            create-code: false
            delete-code: false
            see-code-redeemers: false
```
___

