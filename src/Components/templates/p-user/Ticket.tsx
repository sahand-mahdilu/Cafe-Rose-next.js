import Link from "next/link";
import styles from "./ticket.module.css";

const Ticket = ({ _id, title, department, hasAnswer, createdAt }) => {
  return (
    <Link href={`/p-user/tickets/answer/${_id}`} className={styles.ticket}>
      <div>
        <p className="max-sm:text-[10px]">{title}</p>
        <p className={`${styles.department} max-sm:text-[12px]`}>{department.title}</p>
      </div>
      <div>
        <p className="max-sm:text-[12px]">{new Date(createdAt).toLocaleDateString("fa-IR")}</p>
        <p className={`${styles.no_answer} max-sm:text-[12px]`}>
        {hasAnswer ? "پاسخ داده شده" : "پاسخ داده نشده"}
        </p>
        {/* answer */}
      </div>
    </Link>
  );
};

export default Ticket;
