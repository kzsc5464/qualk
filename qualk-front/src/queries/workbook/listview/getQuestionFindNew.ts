async function getQuestionFindNew(type: string, pageNumber:number){
    const response = await fetch(`http://localhost:8000/api/v1/quiz/${type}/new/${pageNumber}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })

    return response.json()
}

export default getQuestionFindNew;
