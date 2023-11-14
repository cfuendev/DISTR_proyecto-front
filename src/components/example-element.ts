import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * An example element that rocks cuz it can use UnoCSS stuff via it's Shadow Mode.
 */
@customElement("cfuenlabs-rocks")
export class CFuenLabsRocks extends LitElement {
	static styles = css`
		:root {
			font-family: "Inter", sans-serif;
		}
		@unocss-placeholder;
	`;

	@property({
		type: Object,
		converter(value) {
			return (JSON as JSON).parse(value!);
		},
	})
	data = {
		hello: "hello",
		hello2: "hello2",
		hello3: "hello3",
	};

	constructor() {
		super();
	}

	render() {
		return html`
		<div flex flex-col justify-center items-center>
			<h1 m-0 text="[#A1AFC3]" text-9xl>CFUEN <span text-6xl ml="-30px">LABS</span></h1>
			<h3 m-0 class="text-[#A1AFC3]" text-4xl>UnoCSS + Lit + HMR</h1>
		</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"cfuenlabs-rocks": CFuenLabsRocks;
	}
}
