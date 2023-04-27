import React, { useMemo } from 'react'

type Props = {
  status: string
}

export default function StatusLabel({ status }: Props) {
  const style = useMemo(() => getStyleByStatus(status), [status])

  return <div style={style.container}>{status}</div>
}

const getStyleByStatus = (status: string) => {
  let backgroundColor, textColor

  switch (status) {
    case '販売中':
      backgroundColor = 'red'
      textColor = 'white'
      break
    case '販売停止中':
      backgroundColor = 'yellow'
      textColor = 'white'
      break
    case '入荷待ち':
      backgroundColor = 'green'
      textColor = 'white'
      break
    default:
      backgroundColor = 'blue'
      textColor = 'black'
  }

  return {
    container: {
      backgroundColor,
      borderRadius: 4,
      color: textColor,
      padding: '4px 8px',
    },
  }
}
