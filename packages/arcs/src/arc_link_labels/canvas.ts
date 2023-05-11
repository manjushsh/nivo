// @ts-ignore
import { textPropsByEngine } from '@nivo/core'
import { Theme } from '@nivo/theming'
import { DatumWithArcAndColor } from '../types'
import { ArcLinkLabel } from './types'

export const drawCanvasArcLinkLabels = <Datum extends DatumWithArcAndColor>(
    ctx: CanvasRenderingContext2D,
    labels: ArcLinkLabel<Datum>[],
    theme: Theme,
    strokeWidth: number
) => {
    ctx.textBaseline = 'middle'
    ctx.font = `${theme.labels.text.fontSize}px ${theme.labels.text.fontFamily}`

    labels.forEach(label => {
        ctx.fillStyle = label.textColor
        ctx.textAlign = textPropsByEngine.canvas.align[label.textAnchor]
        ctx.fillText(`${label.label}`, label.x, label.y)

        ctx.beginPath()
        ctx.strokeStyle = label.linkColor
        ctx.lineWidth = strokeWidth
        label.points.forEach((point, index) => {
            if (index === 0) ctx.moveTo(point.x, point.y)
            else ctx.lineTo(point.x, point.y)
        })
        ctx.stroke()
    })
}
