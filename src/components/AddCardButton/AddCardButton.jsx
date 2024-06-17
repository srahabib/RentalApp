import React, { useState } from 'react';

const AddCardButton = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [cardHolderName, setCardHolderName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [cards, setCards] = useState([]);

    const handleAddCardClick = () => {
        setIsEditing(true);
        setErrorMessage('');
    };

    const handleCancelClick = () => {
        // Reset fields and hide inputs
        setCardHolderName('');
        setCardNumber('');
        setExpirationDate('');
        setIsEditing(false);
        setErrorMessage('');
    };

    const handleSaveClick = () => {
        // Validate card number
        const isValidCardNumber = /^[0-9]{16}$/.test(cardNumber);
        if (!isValidCardNumber) {
            setErrorMessage('Please enter a valid 16-digit card number');
            return;
        }

        // Validate expiration date
        const isValidExpirationDate = /^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(expirationDate);
        if (!isValidExpirationDate) {
            setErrorMessage('Please enter a valid expiration date (MM/YY)');
            return;
        }

        // Additional validation for future expiration date
        const [month, year] = expirationDate.split('/');
        const expiration = new Date(`20${year}`, month - 1);
        const now = new Date();
        if (expiration < now) {
            setErrorMessage('Expiration date must be in the future');
            return;
        }

        // Save card details
        const newCard = { cardHolderName, cardNumber, expirationDate };
        setCards([...cards, newCard]);

        // Reset fields and hide inputs
        setCardHolderName('');
        setCardNumber('');
        setExpirationDate('');
        setIsEditing(false);
        setErrorMessage('');
    };

    const handleRemoveCard = (index) => {
        const updatedCards = cards.filter((_, i) => i !== index);
        setCards(updatedCards);
    };

    return (
        <div className="flex flex-col items-center p-4 sm:flex-row sm:justify-center sm:p-8">
            <div className="sm:flex-1 sm:mr-20">
                <p className="text-md mb-3">Payment Cards</p>
                {cards.map((card, index) => (
                    <div key={index} className="mb-4 border p-4 rounded-md">
                        <p>Card Holder : {card.cardHolderName}</p>
                        <p>Card Number : {card.cardNumber}</p>
                        <p>Expiration Date : {card.expirationDate}</p>
                        <button
                            onClick={() => handleRemoveCard(index)}
                            className="text-red-500 mt-2"
                        >
                            Remove
                        </button>
                    </div>
                ))}
                {isEditing ? (
                    <div className="flex flex-col gap-4">
                        <label htmlFor="cardHolderName">
                            Cardholder Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="cardHolderName"
                            type="text"
                            className="w-full max-w-xs p-2 border border-gray-300 rounded-md"
                            value={cardHolderName}
                            onChange={(e) => setCardHolderName(e.target.value)}
                            required
                        />

                        <label htmlFor="cardNumber">
                            Card Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <span className="absolute left-2 top-2 text-gray-400">💳</span>
                            <input
                                id="cardNumber"
                                type="text"
                                className="w-full max-w-xs p-2 pl-8 border border-gray-300 rounded-md"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                required
                            />
                        </div>

                        <label htmlFor="expirationDate">
                            Expiration Date <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="expirationDate"
                            type="text"
                            placeholder="MM/YY"
                            className="w-full max-w-xs p-2 border border-gray-300 rounded-md"
                            value={expirationDate}
                            onChange={(e) => setExpirationDate(e.target.value)}
                            required
                        />

                        <div className="flex gap-4 mt-4">
                            <button
                                onClick={handleSaveClick}
                                className="bg-amber-600 text-white px-4 py-2 rounded"
                            >
                                Save
                            </button>
                            <button
                                onClick={handleCancelClick}
                                className="text-gray-600 px-4 py-2"
                            >
                                Cancel
                            </button>
                        </div>
                        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
                    </div>
                ) : (
                    <button
                        onClick={handleAddCardClick}
                        className="bg-amber-600 text-white px-4 py-2 rounded"
                    >
                        Add Card
                    </button>
                )}
            </div>
        </div>
    );
};

export default AddCardButton;
