import { addQuestion, getQuizes } from '@/lib/actions'
import React from 'react'

const AboutPage = async () => {
  //  await addQuestion()
  const quizes = await getQuizes()

  console.log(quizes[0].questions)

  return <div>AboutPage</div>
}

export default AboutPage
