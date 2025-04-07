import React from 'react';

const ImportMethods = ({ selectedImportMethod, onSelectImportMethod }) => {
  const importMethods = [
    {
      id: 1,
      name: 'Upload CSV File',
      icon: 'upload',
      description: 'Import your existing contacts from a CSV file. Our system will automatically map and organize your data.',
      buttonText: 'Choose File',
      color: 'blue',
    },
    {
      id: 2,
      name: 'Google Contacts',
      icon: 'google',
      description: 'Sync your Google contacts directly with saleskai.pro. Your contacts will be automatically imported and updated.',
      buttonText: 'Connect Google',
      color: 'red',
    },
    {
      id: 3,
      name: 'AI Sourcing',
      icon: 'ai',
      description: 'Let our AI find and qualify potential customers based on your specific criteria and target market.',
      buttonText: 'Start AI Sourcing',
      color: 'green',
    },
  ];

  const renderIcon = (iconType) => {
    switch (iconType) {
      case 'upload':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
        );
      case 'google':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-red-500"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
          </svg>
        );
      case 'ai':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="mb-6 flex items-center gap-2">
        <h2 className="text-lg font-medium text-gray-900">Available Import Methods</h2>
      </div>
      <div className="grid grid-cols-3 gap-6 mb-12">
        {importMethods.map((method) => (
          <div
            key={method.id}
            className={`p-6 bg-white rounded-lg shadow-sm border-2 transition-all
              ${selectedImportMethod === method.id ? 'border-indigo-500' : 'border-transparent'}`}
          >
            <div className="relative">
              {method.id === selectedImportMethod && (
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              )}
              <div
                className={`p-3 w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  method.color === 'blue'
                    ? 'bg-blue-100'
                    : method.color === 'red'
                    ? 'bg-red-100'
                    : 'bg-green-100'
                }`}
              >
                {renderIcon(method.icon)}
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">{method.name}</h3>
            <p className="text-gray-600 mb-6">{method.description}</p>
            <button
              onClick={() => onSelectImportMethod(method.id)}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 text-white ${
                method.color === 'blue'
                  ? 'bg-blue-500 hover:bg-blue-600'
                  : method.color === 'red'
                  ? 'bg-red-500 hover:bg-red-600'
                  : 'bg-green-500 hover:bg-green-600'
              } transition-colors`}
            >
              {method.color === 'blue' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {method.color === 'red' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {method.color === 'green' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {method.buttonText}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImportMethods;