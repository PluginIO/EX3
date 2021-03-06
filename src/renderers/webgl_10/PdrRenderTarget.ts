import { IRenderTarget } from "../../renderers/interfaces/IRenderTarget";
import { Renderer } from "../../renderers/Renderer";
import { Texture2D } from "../../resources/Texture2D";
import { RenderTarget } from "../../resources/RenderTarget";

export class PdrRenderTarget implements IRenderTarget
{
    public constructor(renderer: Renderer, renderTarget: RenderTarget)
    {
        console.log("Creating render target - WebGL 1.0")
    }

    public dispose(): void
    {

    }

    public enable(renderer: Renderer): void
    {

    }

    public disable(renderer: Renderer): void
    {

    }

    public readColor(i: number, renderer: Renderer, texture: Texture2D): void
    {

    }
}