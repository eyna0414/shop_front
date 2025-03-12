
import React from 'react'
import styles from './ShopButton.module.css'

//쇼핑몰 프로젝트에 사용할 버튼 컴포넌트
//size : samll, normal, large
const ShopButton = ({title = '버튼', size='normal', click}) => {

  return (
    <>
      <button
        type='button'
        className={[styles.btn, styles[size]].join(' ')}
        onClick={() => {click()}}
      >
        {title}
      </button>
    </>
  )
}

export default ShopButton
