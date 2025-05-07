import request from "request";
type tipo = "Charm" | "Conjuration" | "Spell" | "Transfiguration" | "HealingSpell" | "DarkCharm" | "Jinx" | "Curse" | "MagicalTransportation" | "Hex" | "CounterSpell" | "DarkArts" | "CounterJinx" | "CounterCharm" | "Untransfiguration" | "Vanishment" | "BindingMagicalContract" | "";
export declare function findSpell(name?: string, type?: tipo, incantation?: string): Promise<request.Response>;
export {};
