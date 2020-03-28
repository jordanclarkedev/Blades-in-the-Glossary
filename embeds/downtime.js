module.exports.downtime = `**Downtime**
Stages of Downtime:

1. \` $payoff \` Get paid in Rep and Coin.
2. \` $heat \` Determine crew's Heat.
3. \` $entanglements \` Roll entanglements.
4. \` $activities \` Downtime activities.
`

module.exports.payoff = `**Payoff**
**2 REP**, +1 per Tier higher / -1 per Tier lower.
- *Silent Operation: If no one knows about it, gain no REP.*

**COIN**
- 2 COIN: A minor job; several full purses.
- 4 COIN: A small job; a strongbox.
- 6 COIN: A standard score; decent loot
- 8 COIN: A big score; serious loot.
- 10 COIN: A major score; impressive loot.

**TITHE**: Pay Tier - 1 COIN to crime boss.
Refusing to Pay: Start clock for that boss’ patience running out. -1 faction status when clock fills

`
module.exports.heat = `**Heat**
When HEAT track fills, clear it, mark a WANTED LEVEL, and roll over remaining HEAT.

**0 HEAT**: Smooth & quiet; low exposure.
**2 HEAT**: Contained; standard exposure.
**4 HEAT**: Loud & chaotic; high exposure.
**6 HEAT**: Wild; devastating exposure.

**+1 HEAT each**: 
- High-profile / well-connected target.
- Situation happened on hostile turf.
- At war with another faction.

**+2 HEAT**: If killing was involved
`;
module.exports.entanglements = `**Entanglements**
Roll 1d per Wanted level

**Heat 0-3**
Result 1-3: Gang Trouble or Usual Suspects
Result 4-5: Rivals or Unquiet Dead
Result 6: Cooperation

**Heat 4-5**
Result 1-3: Gang Trouble or Questioning
Result 4-5: Reprisals or Unquiet Dead
Result 6: Show of Force

**Heat 6+**
Result 1-3: Flipped or Interrogation
Result 4-5: Demonic Notice or Show of Force
Result 6: Arrest`;
