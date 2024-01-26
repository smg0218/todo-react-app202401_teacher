import React from 'react';
import './scss/TodoHeader.scss';
import {getCurrentLoginUser} from "../../util/login-util";

const TodoHeader = ({count, onPromote}) => {

  const today = new Date();

  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

  const upgradeHandler = e => {
      if (window.confirm('프리미엄 회원으로 업그레이드 하시겠습니까?')) {
          onPromote();
      }
  };


  // 등급 뱃지를 조건부 렌더링하는 함수
    const renderGradeBadge = () => {
        const role = getCurrentLoginUser().role;

        switch (role) {
            case 'COMMON':
                return (<span className='promote badge bg-warning' onClick={upgradeHandler}>일반회원</span>);
                break;
            case 'PREMIUM':
                return (<span className='promote badge bg-danger'>프리미엄회원</span>)
                break;
            case 'ADMIN':
                return (<span className='promote badge bg-dark'>관리자</span>)
                break;
        }
    };

    return (
        <header>
            <h1>{dateString}</h1>
            <div className='day'>{dayName}</div>
            <div className='tasks-left'>할 일 {count}개 남음</div>

            { renderGradeBadge() }

        </header>
    );
};

export default TodoHeader;