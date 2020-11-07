import React, { forwardRef } from "react"
import PropTypes from "prop-types"
import { RichText } from "prismic-reactjs"
import { linkResolver } from "../../utils/linkResolver"
import cn from "classnames"

const CustomRichText = forwardRef(({ data, className, isText }, ref) => {
  if (!data) return null

  return (
    <div className={cn(isText && "richtext", className)} ref={ref}>
      {RichText.render(data, linkResolver)}
    </div>
  )
})

CustomRichText.defaultProps = {
  isText: false,
}

CustomRichText.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
  isText: PropTypes.bool,
}

export default CustomRichText
