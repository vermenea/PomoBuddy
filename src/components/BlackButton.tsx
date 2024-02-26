export default function CreateToStudyButton() {
  return (
    <a
      onClick={(e) => {
        e.preventDefault()
        const toStudyElement = document.getElementById('tostudy')
        toStudyElement?.scrollIntoView({
          behavior: 'smooth',
        })
      }}
      className="row-start-4 row-end-5 col-start-2 col-end-4 uppercase font-oswald text-white text-1.6rem rounded-12 p-4 bg-zinc-800 bg-opacity-80 transition-all hover:bg-opacity-100 shadow-lg rounded-md"
      href="#tostudy"
    >
      create a new toStudy
    </a>
  )
}
