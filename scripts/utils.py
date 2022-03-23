from brownie import accounts


def get_account():
    return accounts[0]  # TODO make this more flexible
