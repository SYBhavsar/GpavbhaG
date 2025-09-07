function Icon({ name, className = "w-5 h-5", ...props }) {
  return (
    <img
      src={`/${name}.svg`}
      alt={name}
      className={className}
      {...props}
    />
  )
}

export default Icon