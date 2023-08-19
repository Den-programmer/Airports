import Button from 'react-bootstrap/Button'

interface IProps {
    clickHandler: () => void
}

const ResetButton:React.FC<IProps> = (props) => {
    return (
        <div className="d-flex justify-content-center mt-4">
            <Button onClick={props.clickHandler} className="reset-button" variant="outline-primary">
                Reset
            </Button>
        </div>
    )
}

export default ResetButton