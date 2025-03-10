import styles from "./Invitation.module.scss";
import Section from "@shared/Section";
import classNames from "classnames/bind";
import { FC } from "react";
import Text from "@shared/Text";

const cx = classNames.bind(styles);

interface InvitationProps {
    message: string;
}

const Invitation: FC<InvitationProps> = ({
    message
}) => {
    return (
        <Section className={cx("container")}>
            <Text>
                {message}
            </Text>
        </Section>
    )
}

export default Invitation;