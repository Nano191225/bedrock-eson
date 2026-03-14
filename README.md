# bedrock-eson

Minecraft Bedrock Script API向けに使える、軽量なESONパーサー/シリアライザーです。

- `ESON.parse(string)`: ESON文字列をJavaScriptオブジェクトへ変換
- `ESON.stringify(value)`: オブジェクト/配列をESON文字列へ変換

## ESONとは

このプロジェクトで扱うESONは、次のような`key=value`形式の文字列です。

```text
{name='Steve',level=12,admin=false,tags=[red,blue],meta={world='Overworld'}}
```

対応している主な値:

- オブジェクト: `{a=1,b=2}`
- 配列: `[1,2,3]`
- 文字列: `'text'` または `"text"`（引用なし文字列も可）
- 数値: `123`, `3.14`
- 真偽値: `true`, `false`
- `null`

## インストール

```bash
pnpm add bedrock-eson
```

## 使い方

```ts
import ESON from "bedrock-eson";

const input = "{name=Alex,score=120,flags=[pvp,build],settings={music=true}}";

const data = ESON.parse(input);
// => { name: "Alex", score: 120, flags: ["pvp", "build"], settings: { music: true } }

const text = ESON.stringify(data);
// => "{name=Alex,score=120,flags=[pvp,build],settings={music=true}}"
```

## Minecraft Bedrockでの利用例

`src/main.ts` ではチャットメッセージをESONとして解釈し、結果を送信者へ返すサンプルを用意しています。

```ts
import { world } from "@minecraft/server";
import ESON from "bedrock-eson";

world.afterEvents.chatSend.subscribe((event) => {
	event.sender.sendMessage(JSON.stringify(ESON.parse(event.message), null, 2));
});
```

## ライセンス

MIT License
