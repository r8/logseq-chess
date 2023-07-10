import '@logseq/libs'
import { LSPluginBaseInfo } from '@logseq/libs/dist/LSPlugin'
import ChessRenderer from './renderers/chess/chessRenderer'

function main(baseInfo: LSPluginBaseInfo) {
  logseq.Experiments.registerFencedCodeRenderer(
      'chess', {
        edit: true,
        render: ChessRenderer
      }
  )
}

logseq
  .ready(main)
  .catch(console.error)
