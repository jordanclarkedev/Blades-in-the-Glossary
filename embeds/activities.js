module.exports.activities  = `**Downtime Activities**
\` $acquire \` Acquire an asset
\` $longterm \` Work on a long-term project.
\` $recover \` Recover from injury
\` $reduce \` Roll an action to reduce Heat.
\` $train \` Gain XP.
\` $vice \` Indulge in your vice.`;

module.exports.acquire  = `**Acquire An Asset**
Acquire temporary use of an asset. Roll the crew's Tier. The result indicates the quality of the asset.

1-3: Inferior (Tier -1)
4/5: Standard (Tier)
6: Fine (Tier +1)
Crit: Exceptional (Tier +2).

You may spend coin to bump this result beyond exceptional, to reach higher quality Tiers, but it costs 2 coin per level to do so.`

module.exports.longterm  = `**Long-term Projects**
Work on a Long Term Project, if you have the means. Roll a trait and mark 1 segment on the project clock per level

1-3: one segment
4/5: two segments
6: three segments
Crit: five segments`

module.exports.recover  = `**Recover From Injury**
Get treatment to tick your healing clock (like a long-term project). When you fill a clock, each harm is reduced by one level.

Roll NPC Quality (+1 if Crew Contact), or if a PC has Physicker, roll Tinker. If you have Physicker, you can take 2 stress to Tinker yourself.

1-3: one segment
4/5: two segments
6: three segments
Crit: five segments`

module.exports.reduce  = `**Reduce Heat**
Say how you reduce Heat on the crew and roll your action. Reduce heat accoding to the result level.

1-3: one
4/5: two
6: three
Crit: five`

module.exports.train  = `**Train**
Mark 1 xp for an attribute or your playbook (+1 xp if you have the appropriate crew training upgrade).
You can train a given xp track only once per downtime.`

module.exports.indulge  = `**Indulge Your Vice**
Visit a purveyor of your vice and roll dice equal to your lowest attribute. Clear stress equal to your highest die result.

\` $overindulge \` If you clear more stress levels than you had marked, you overindulge.

If you do not or cannot indulge your vice during downtime, you take stress equal to your trauma.`

module.exports.overindulge  = `**Overindulge**

**Attract trouble**: Select/roll an additional entanglement.
**Brag**: About your exploits. +2 HEAT.
**Lost**: Vanish for a few weeks. Play a different character until this one returns. When the character returns, they heal any harm they had.
**Tapped**: Current purveyor cuts you off`;
