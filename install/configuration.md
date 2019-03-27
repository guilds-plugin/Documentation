# Configuration

The **config.yml** file will be created on the first server startup.

The config file *should* automatically update with the new additions added in an update.

## Table of Contents

// Content Soon


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

Detailed explanation and configuration for guild claims

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