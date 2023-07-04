const timeComment = (userTime: number, quizTime: number, isPass: boolean) => {
    switch (isPass){
        case true:
            if(quizTime * 0.5 > userTime){
                // 전체 시간의 50% 미만으로 시간을 사용
                return "굉장히 빠른 속도로 시험을 보셨네요! 돌다리도 두드려보는 법! \n 실전에서는 한번 더 검토하는 시간을 가져도 좋을 것 같아요!"
            } else if (quizTime * 0.5 >= userTime && quizTime * 0.85 < userTime) {
                // 전체 시간의 50% ~ 85% 사이 시간을 사용
                return "적절한 시간 분배를 하셨네요! 실전에도 끄떡없겠어요 🙂"
            } else if (quizTime * 0.85 <= userTime) {
                // 전체 시간의 85% 이상의 시간을 사용
                return "시간을 꽉꽉 채워 알차게 사용하셨네요! 실전에서 시간 분배는 필수! \n 마음의 여유를 위해 지식을 높여봐요!"
            } else {
                // Time over
                return "Time over"
            }    

            break

        case false:
            if(quizTime * 0.5 > userTime){
                // 전체 시간의 50% 미만으로 시간을 사용
                return "굉장히 빠른 속도로 시험을 보셨네요! \n 남은 시간동안 풀었던 문제를 다시 점검해보는 과정은 어떨까요?"
            } else if (quizTime * 0.5 >= userTime && quizTime * 0.85 < userTime) {
                // 전체 시간의 50% ~ 85% 사이 시간을 사용
                return "적절한 시간 분배를 하셨네요! 이제 정답율만 높이는 일만 남았어요! \n 어떤 부분에서 실수 했는지 확인해볼까요?"
            } else if (quizTime * 0.85 <= userTime) {
                // 전체 시간의 85% 이상의 시간을 사용
                return "시간을 꽉꽉 채워 알차게 사용하셨네요! \n Qualk과 함께 시간이 오래 걸렸던 문제들에 대한 정답을 찾으러가볼까요?"
            } else {
                // Time over
                return "Time over"
            }    

            break
    }
}

export default timeComment;