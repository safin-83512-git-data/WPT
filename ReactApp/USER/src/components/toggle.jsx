import { useState } from 'react'

function Toggle({ contents }) {
  const [expanded, setExpanded] = useState(false)

  const renderContents = () => {
    if (expanded) {
      return contents
    } else {
      if (contents.length > 100) {
        return contents.substr(0, 97) + '...'
      } else {
        return contents
      }
    }
  }

  return (
    <div>
      <div>
        {renderContents()}
        <button onClick={() => setExpanded(!expanded)} className='btn btn-link'>
          {expanded ? 'less' : 'more'}
        </button>
      </div>
    </div>
  )
}

export default Toggle
