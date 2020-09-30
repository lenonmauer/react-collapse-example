import React, { useRef, cloneElement, useEffect, useState } from 'react'
import { bool, node, number } from 'prop-types'

import { Container } from './styles'

function Collapse({ open, duration, children }) {
  const childrenRef = useRef(null)
  const collapseRef = useRef(null)
  const [initialized, setInitialized] = useState(false)

  const handleTransitionEnd = () => {
    if (open) {
      collapseRef.current.style.height = 'auto'
    }
  }

  const triggerReflow = (node) => {
    /* eslint-disable-next-line */
    node.offsetHeight
  }

  const initialize = () => {
    if (open) {
      collapseRef.current.style.height = 'auto'
    }

    setInitialized(true)
  }

  const getChildrenHeight = () => {
    return childrenRef.current.scrollHeight + 'px'
  }

  const collape = () => {
    collapseRef.current.style.height = getChildrenHeight()
    triggerReflow(childrenRef.current)
    collapseRef.current.style.height = '0'
  }

  const expand = () => {
    collapseRef.current.style.height = getChildrenHeight()
  }

  useEffect(() => {
    if (!initialized) {
      initialize()
      return
    }

    open ? expand() : collape()
  }, [open])

  return (
    <Container ref={collapseRef} onTransitionEnd={handleTransitionEnd} applyTransition={initialized} duration={duration}>
      {cloneElement(children, {
        ref: childrenRef
      })}
    </Container>
  )
}

Collapse.propTypes = {
  open: bool.isRequired,
  children: node.isRequired,
  duration: number
}

Collapse.defaultProps = {
  duration: 300
}

export default Collapse