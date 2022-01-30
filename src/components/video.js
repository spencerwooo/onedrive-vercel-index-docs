export default ({ src, ratio }) => {
  return (
    <div style={{ position: 'relative', margin: '2rem 1rem' }}>
      <div style={{ paddingBottom: ratio * 100 + '%' }} />
      <video style={{ position: 'absolute', top: 0, left: 0 }} loop muted autoPlay playsInline controls>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  )
}
