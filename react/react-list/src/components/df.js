import PropTypes from 'prop-types'

function HelloWorldComponent({ name }) {
    return (
        <div>Hello, {name}</div>
    )
}

HelloWorldComponent.propTypes = {
    name: PropTypes.string
}

export default HelloWorldComponent