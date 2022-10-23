import PropTypes from 'prop-types'
import {Stat,Title,StatList,StatItem,Label,Percentage} from './Statistics.styled.jsx'

const Statistics = ({ title, stats }) => {
    return (
        <Stat>
            {title && <Title>{title}</Title>}
            <StatList>
                {stats.map(({ id, label, percentage }) => (
                <StatItem key={id}>
                    <Label>{label}</Label>
                    <Percentage>{percentage}%</Percentage>
                </StatItem>
                ))}
            </StatList>
        </Stat>
    );
};

export default Statistics;

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string,
        percentage: PropTypes.number
    })
    )  
}