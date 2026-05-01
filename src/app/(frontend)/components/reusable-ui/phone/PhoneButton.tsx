import Link from 'next/link'
import styles from './phone-button.module.css'

export default function PhoneButton() {
  return (
    <div className={styles.phoneButtonContainer}>
      <Link href={'tel:+33683816123'}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.59305 2.87614C6.39922 0.940309 5.21945 -0.890966 3.23347 0.47223C1.24749 1.83543 -0.949455 4.30415 0.433153 8.44119C1.81576 12.5781 6.80246 18.6903 11.0247 21.3628C15.2469 24.0353 20.409 25.8524 23.5852 20.8194C24.5186 19.3402 23.9456 17.896 21.1617 16.5452C18.3777 15.1943 17.6451 14.2765 16.0654 16.1532C14.8906 17.5491 13.3352 17.5322 12.1189 16.595C10.9024 15.6578 7.59086 12.224 6.61437 10.8084C5.6378 9.39267 6.33976 8.56057 7.24971 7.96049C8.15957 7.36041 9.70974 6.30836 7.59305 2.87614Z"
            fill="currentColor"
          />
        </svg>
      </Link>
    </div>
  )
}
